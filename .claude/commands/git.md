---
description: Git management - branches, commits, push, PRs, cherry-pick, status
argument-hint: <subcommand> [options] (e.g., commit, branch create feature-x, pr, push -u)
allowed-tools: Bash(git:*), Bash(gh:*), Bash(npm run lint:*), Bash(npm run format:*)
---

## User Input

```text
$ARGUMENTS
```

Parse the subcommand from `$ARGUMENTS` and execute the corresponding operation.

---

## Subcommand Routing

| First Word | Action |
|------------|--------|
| `branch` | Branch management |
| `commit` | Stage all and commit |
| `push` | Push to remote |
| `pr` | Pull request operations |
| `cherry` | Cherry-pick a commit |
| `status` | Show git status |
| `log` | Show recent commits |
| (empty) | Show usage help |

---

## Branch Subcommands

### `branch create <name>`
1. Validate branch name (no spaces, valid git ref)
2. Check if branch exists: `git branch --list <name>` and `git ls-remote --heads origin <name>`
3. If exists, abort with warning
4. Create and switch: `git checkout -b <name>`

### `branch delete <name>`
1. **SAFETY**: Block deletion of `main` or `master`
2. If on target branch, switch to main first: `git checkout main`
3. Delete local: `git branch -d <name>`
4. Ask user about remote deletion
5. If confirmed: `git push origin --delete <name>`

### `branch list`
1. Fetch: `git fetch --prune`
2. List all: `git branch -a --format='%(HEAD) %(refname:short) %(upstream:track)'`

### `branch switch <name>`
1. Check uncommitted changes: `git status --porcelain`
2. If changes, warn and ask to stash or abort
3. Switch: `git checkout <name>`

---

## Commit Subcommand

### `commit` or `commit <message>`

**Step 1 - Pre-commit checks:**
```bash
npm run lint
```
If fails, show errors and ask user to fix or abort.

**Step 2 - Check for changes:**
```bash
git status --porcelain
```
If empty, report "Nothing to commit" and exit.

**Step 3 - Stage all:**
```bash
git add -A
```

**Step 4 - Generate/use message:**
- If message provided in `$ARGUMENTS`, use it
- Otherwise, analyze changes and generate conventional commit:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation
  - `style`: Formatting
  - `refactor`: Code restructure
  - `test`: Tests
  - `chore`: Maintenance

**Step 5 - Commit:**
```bash
git commit -m "type(scope): description"
```

**CRITICAL PROJECT RULES:**
- Do NOT add "Generated with Claude Code" footer
- Do NOT add "Co-Authored-By: Claude" line
- Keep message concise and conventional

---

## Push Subcommand

### `push`
1. Get branch: `git rev-parse --abbrev-ref HEAD`
2. **SAFETY**: If `main` or `master`, warn and require confirmation
3. Check upstream: `git rev-parse --abbrev-ref @{upstream} 2>/dev/null`
4. If no upstream, suggest `push -u`
5. Push: `git push`

### `push -u`
1. Get branch name
2. **SAFETY**: Warn if main/master
3. Push with tracking: `git push -u origin <branch>`

---

## Pull Request Subcommand

### `pr` or `pr create`
1. Ensure pushed: `git push -u origin HEAD` if needed
2. Get commits since main: `git log main..HEAD --oneline`
3. Analyze ALL commits for PR summary
4. Generate title from branch or commits
5. Create PR:
```bash
gh pr create --title "<title>" --body "## Summary
<bullet points>

## Test Plan
- [ ] Manual testing
- [ ] Unit tests pass"
```
6. Return PR URL

### `pr <number>`
View PR: `gh pr view <number>`

---

## Cherry-pick Subcommand

### `cherry <commit-hash>`
1. Validate: `git cat-file -t <hash>`
2. Show: `git show --stat <hash>`
3. Confirm with user
4. Execute: `git cherry-pick <hash>`
5. If conflicts, guide resolution

---

## Status/Info Subcommands

### `status`
```bash
git status
```

### `log`
```bash
git log --oneline -15 --decorate
```

---

## Safety Rules

1. **Protected branches**: Always warn before actions on `main`/`master`
2. **No force push**: Never use `--force` unless explicitly requested
3. **Uncommitted changes**: Warn before branch switch
4. **Delete confirmation**: Always confirm branch deletion
5. **Secrets**: Never commit `.env*`, `*.key`, `credentials*`

---

## Usage Examples

When `$ARGUMENTS` is empty, show:

```
Git Management Commands:

  Branch:
    /git branch create feature-x    Create new branch
    /git branch delete old-feature  Delete branch
    /git branch list                List all branches
    /git branch switch develop      Switch to branch

  Commit:
    /git commit                     Auto-generate message
    /git commit "feat: add login"   Use provided message

  Push:
    /git push                       Push current branch
    /git push -u                    Push with upstream

  Pull Request:
    /git pr                         Create PR
    /git pr 123                     View PR #123

  Other:
    /git cherry abc123              Cherry-pick commit
    /git status                     Show status
    /git log                        Show recent commits
```
