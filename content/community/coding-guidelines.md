---
title: Coding Guidelines
---

We use spaces, not tabs.

### Names

- Use PascalCase for `type` names
- Use PascalCase for `enum` values
- Use camelCase for `function` and `method` names
- Use camelCase for `property` names and `local variables`
- Use UPPER_SNAKE_CASE for `true constants` (hardcoded string or env variable)
- Use whole words in names when possible

### Comments

Use [JSDoc](https://jsdoc.app/index.html) style comments for `functions`, `interfaces`, `enums`, and `classes`

### Style

Our style guide is very similar to [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript), apart from a few minor modifications. Notably, spaces should be included inside parentheses and brackets.

### Linting

Many of our repos contain an [ESLint](https://eslint.org/) configuration file. You can run ESLint on any file or directory by running `npx eslint yourfile.js` in a terminal or command prompt.

It is recommended to [integrate ESLint](https://eslint.org/docs/user-guide/) with your editor so you can receive linter suggestions as you type. We recommend [VSCode's ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

In addition to linting, code will automatically be checked by GitHub Actions for style.

### Commit Messages

Our git commit messages consist of three sections separated by blank lines in the following format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

- Type and subject is mandatory. Scope is optionally added in parentheses. See one of our repo's commit history for examples.
- Use the footer to reference GitHub issues, e.g. `Close #128` or `Related #128`. We use this for tracking issues.

#### Type

A majority of our commits tend to be one of the following:

- _feat_: Changes that introduce a new feature or enhancement; Always an addition or improvement.
- _fix_: Changes related to unexpected behavior; Usually bug related, but also for correcting typos/content.
- _perf_: Changes that improve performance.
- _refactor_: Changes that don't alter behavior, don't add features/enhancements, don't affect performance, and don't change anything for the user.

:::note
Typos are always mistakes, and therefore type _fix_. Additions/enhancements to content are type _feat_.
:::

We have some target level types:

- _build_: Changes to our build system or external dependencies (e.g. with scopes: gulp, broccoli, npm)
- _ci_: Changes to our CI configuration files and scripts (e.g. with scopes: Circle, BrowserStack, SauceLabs)
- _docs_: Changes to our documentation
- _test_: Changes to our tests; Adding missing tests or correcting existing tests

And, the last type:

- _style_: Changes to code that are superficial and do not affect anything in a meaningful way (e.g. white-space, formatting, missing semi-colons)

#### Scope

Most types should have a scopes, as defined by the repo. See the `CONTRIBUTING.md` file in a project repo for scopes.

Some types do not require scopes:

- `style`, `test`, and `refactor` changes to multiple scopes (e.g. `style: add missing semicolons`).
- `docs` changes (e.g. `docs: fix typo in readme`).

#### Subject

We begin our subjects in lowercase and remove any trailing punctuation (e.g. period or exclamation mark).

The subject line must be no more than 72 characters. If you're unable to succinctly summarize what you've done, then perhaps too many changes are being committed at once. Aim for smaller commits which can be explained better.

Our subjects are written imperatively. The imperative is the same as if giving a command or instruction. It can be easily tested by substituting the subject for blank in the line "this commit will <u>FILL IN THE BLANK</u>". Examples: refactor, update, show, hide, add, remove, allow, prevent, open, close.

#### Body

Code is generally self-explanatory. Not every commit requires a body. Some changes are so simple that no further explanation is necessary. Even complex code should have comments for explanations.

Focus on using the body to explain _why_ you made the changes. Explain how it worked before the change, why it required changing, and why you resolved it the way you did.

If the subject is the command, then the body is the purpose.

#### Footer

If your commit relates to a GitHub issue, then use the footer to link it (e.g. "Related #128"). If your commit would close a GitHub issue when merged, then use the footer to automate it (e.g. "Close #128"). One commit should almost never reference multiple issues, but if need be the commands can be comma-separated (e.g. "Close #128, Close #64, Related #32").

#### Revert

When reverting single commits, modify the header of the commit being reverted by beginning it with `revert: ` and use the body of the commit to reference the SHA hash of the commit being reverted.

_Example commit with SHA abc123_

```
docs: add contributing guidelines
```

_Example of reverting commit with SHA abc123_

```
revert: docs: add contributing guidelines

Reverting commit abc123.
```
