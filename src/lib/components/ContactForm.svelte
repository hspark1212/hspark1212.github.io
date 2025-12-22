<script lang="ts">
	import { profile } from '$lib/data/profile';

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		const body = `From: ${name} (${email})\n\n${message}`;
		const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoUrl;
	}

	function handleReset() {
		name = '';
		email = '';
		subject = '';
		message = '';
	}
</script>

<form onsubmit={handleSubmit}>
	<div class="form-grid">
		<div class="form-row">
			<input type="text" bind:value={name} placeholder="Name" />
			<input type="email" bind:value={email} placeholder="Email" />
		</div>
		<input type="text" bind:value={subject} placeholder="Subject" />
		<textarea bind:value={message} placeholder="Message" rows="6"></textarea>
		<div class="actions">
			<button type="submit" class="btn-primary">Send Message</button>
			<button type="button" class="btn-secondary" onclick={handleReset}>Reset Form</button>
		</div>
	</div>
</form>

<style>
	.form-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5em;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		appearance: none;
		border-radius: 5px;
		border: solid 2px var(--color-border-link);
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
		background: #fafafa;
	}

	input[type='text'],
	input[type='email'] {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		border-color: var(--color-accent);
	}

	input::placeholder,
	textarea::placeholder {
		color: #aaa;
		font-style: italic;
	}

	.actions {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	button {
		appearance: none;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8em;
		font-weight: 700;
		height: 3.5em;
		letter-spacing: 0.1em;
		padding: 0 2em;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
		transition: background-color 0.2s ease-in-out;
	}

	.btn-primary {
		background-color: var(--color-accent);
		color: #ffffff;
	}

	.btn-primary:hover {
		background-color: var(--color-button-hover);
	}

	.btn-secondary {
		background-color: #989898;
		color: #ffffff;
	}

	.btn-secondary:hover {
		background-color: #a5a5a5;
	}

	/* Responsive: stack on mobile */
	@media screen and (max-width: 480px) {
		.form-row {
			grid-template-columns: 1fr;
		}

		.actions {
			flex-direction: column;
		}

		button {
			width: 100%;
		}
	}
</style>
