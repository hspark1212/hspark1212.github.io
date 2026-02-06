import { expect, test, type Page } from '@playwright/test';

async function expectSectionNearTop(page: Page, id: string) {
	await expect
		.poll(async () => {
			return page.evaluate((sectionId) => {
				const section = document.getElementById(sectionId);
				if (!section) {
					return null;
				}

				return section.getBoundingClientRect().top;
			}, id);
		})
		.toBeLessThan(220);
}

test('renders all primary sections and key UI elements', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { level: 1, name: 'Hyunsoo Park' })).toBeVisible();
	await expect(page.locator('section#journey')).toBeVisible();
	await expect(page.locator('section#projects')).toBeVisible();
	await expect(page.locator('section#tutorials')).toBeVisible();
	await expect(page.locator('section#blog')).toBeVisible();
	await expect(page.locator('section#contact')).toBeVisible();
	await expect(page.getByRole('button', { name: 'Explore Full Archive' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Explore Full Tutorial' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Explore Full Papers' })).toBeVisible();
	await expect(page.locator('#tutorials a')).toHaveCount(3);
	await expect(page.locator('#publications .publication-entry')).toHaveCount(5);
	await expect(page.locator('a[href^="mailto:"]')).toContainText('phs68660888@gmail.com');
});

test('tutorial list expands from 3 items to full list', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('#tutorials a')).toHaveCount(3);
	await page.getByRole('button', { name: 'Explore Full Tutorial' }).click();
	await expect(page.locator('#tutorials a')).toHaveCount(4);
	await page.getByRole('button', { name: 'Show Less' }).click();
	await expect(page.locator('#tutorials a')).toHaveCount(3);
});

test('expands and collapses the detailed projects list', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('button', { name: 'Explore Full Archive' }).click();
	await expect(page.getByRole('heading', { level: 4, name: 'Machine Learning' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Show Less' })).toBeVisible();

	await page.getByRole('button', { name: 'Show Less' }).click();
	await expect(page.getByRole('heading', { level: 4, name: 'Machine Learning' })).toHaveCount(0);
});

test('desktop navigation links scroll to the right section', async ({ page }) => {
	await page.goto('/');

	const navTargets = [
		{ label: 'Journey', id: 'journey' },
		{ label: 'Featured', id: 'projects' },
		{ label: 'Tutorial', id: 'tutorials' },
		{ label: 'Blog', id: 'blog' },
		{ label: 'Paper', id: 'publications' }
	];

	for (const target of navTargets) {
		await page.locator('nav').getByRole('link', { name: target.label, exact: true }).click();
		await expect(page).toHaveURL(new RegExp(`#${target.id}$`));
		await expectSectionNearTop(page, target.id);
	}
});

test('mobile viewport has no horizontal overflow and supports navigation', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');

	await expect(page.locator('nav')).toBeVisible();
	const hasHorizontalOverflow = await page.evaluate(() => {
		return document.documentElement.scrollWidth > window.innerWidth + 1;
	});
	expect(hasHorizontalOverflow).toBeFalsy();

	await page.locator('nav').getByRole('link', { name: 'Tutorial', exact: true }).click();
	await expect(page).toHaveURL(/#tutorials$/);
	await expectSectionNearTop(page, 'tutorials');
});

test('blog card opens markdown detail page', async ({ page }) => {
	await page.goto('/');

	await page.locator('#blog a').first().click();
	await expect(page).toHaveURL(/\/blog\/to-be-soon$/);
	await expect(page.locator('article > h1')).toContainText('To Be Soon');
	await expect(page.locator('article')).toContainText('TBD');
});
