# Smart Commit

Analyze changes and create intelligent commits following GitFlow conventions.

## Instructions

1. Run `git status` - if no changes, inform and exit
2. Get current branch with `git branch --show-current`
3. **If on main/master/develop: REFUSE commit and create feature branch**
   - Analyze changes with `git diff`
   - Determine type: feat/fix/chore/refactor/docs/test/perf/style
   - Create branch: `git checkout -b <type>/<descriptive-name-in-english>`
   - Example: `feat/add-oauth-integration`, `fix/resolve-memory-leak`
4. **If on feature branch:** Validate it follows GitFlow (has type prefix)
5. Generate commit message in Conventional Commits format:
   - Pattern: `<type>(<scope>): <description>`
   - Types: feat, fix, chore, refactor, docs, test, perf, style, ci, build
   - English, imperative mood, lowercase, no period
   - Examples: `feat(auth): add JWT validation`, `fix(api): handle null pointer`
6. Stage and commit: `git add . && git commit -m "<message>"`
7. Show commit hash and ask: "Push to remote?"
8. If yes: `git push origin <branch>` or `git push -u origin <branch>` for new branches

## Rules

- NEVER commit to main/master/develop
- Always use English for branches and commits
- Branch names in kebab-case with type prefix
- Commit messages follow Conventional Commits
