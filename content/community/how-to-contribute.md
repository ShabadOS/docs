---
title: Contributing
sidebar_label: Introduction
---

Thank you for your interest in participating! This document caters to developers or programmers that wish to write code and directly contribute to the source code of Shabad OS. See [Feedback](#feedback) for non-developer contributors.

Most of the contributing model for Shabad OS is shared. A few repo-specific topics of note include: Getting Started / Prerequisites and Scope definitions. These repo-specific topics should be referenced on a repo level, and not on the org level.

## Feedback

There are many ways for people to contribute, beyond writing code or programming:

- Ask a question via [Slack](https://chat.shabados.com)
- Request a new feature or report unexpected bugs by filing an issue
- Upvote popular feature requests using the thumbs-up/+1 reaction on the first post of an issue
- Follow [@shabad_os on Instagram](https://www.instagram.com/shabad_os/) and [@shabad_os on Twitter](https://www.twitter.com/shabad_os/) and let us know what you think!

## Prerequisites

If you wish to better understand how Shabad OS works or want to debug an issue: get the source, build it, and run it locally. See the contributing doc of the repo for instructions.

## Workflow

The general workflow of development (or Git Flow) is to [Issues,choose an issue](#issue) to work on, [Branches,create a feature branch](#branches), and [Pull Requests,submit a pull request](#pull-requests).

### Issues

After getting started with the repo, check out the issues list:

- Issues labeled with `Impact: Crit` or `Status: 3hard5me` are good issues to submit a PR for.
- Issues labeled `Effort: 0` or `Effort: 1` are great if you are in the code for the first time.
- If you are contributing significant changes, please discuss with the assignee of the issue before beginning your work.

There should be a pinned issue tracker in each repo with helpful queries. These queries provide lists of potential areas for contributions. Note that, just because an issue exists, does not mean we will accept a contribution for it.

There are a few labels worth noting:

- _Effort: 0-109_ - The perceived/estimated "points" of effort to resolve the issue
- _Impact: {Low, Avg, High, Crit}_ - The perceived percentage of users the issue affects
- _Status: 3hard5me_ - Issues the assignee needs help to resolve

If an issue is easy to resolve and impacts a majority of users, then its resolution should be prioritized higher.

:::note IMPORTANT
Be sure to discuss with the assignee of the issue, before tackling issues. If there are no assignees, ask to be assigned in a comment.
:::

:::note IMPORTANT
To avoid multiple pull requests resolving the same issue, let others know you are working on it by saying so in a comment.
:::

### Branches

The `main` branch is used for stable releases. The `dev` branch is used for next releases / prereleases and serves as the primary branch of development. Shabad OS follows a _fork and pull model_. Developers should fork the `dev` branch to their personal account. Contributors can create branches off this personal `dev` branch and work on them as `origin`. Branches should be short-lived and should relate to a single issue from the repo. Avoid updating branches with other branches. Sync your personal branch with `upstream` dev with a merge before submitting a PR.

> Keep your personal branches separate from each other. Sync your personal branch with upstream `dev` using merge.

:::tip PROTIP
If using the `gh` [cli tool from GitHub](https://cli.github.com) to clone your forked repo, you will automatically have `origin` and `upstream` defined correctly.
:::

```
# Only add upstream if you are not using the gh command to clone your forked repo
# Replace {repo} with the repo name
git remote add upstream https://github.com/ShabadOS/{repo}.git

# Make sure that you are on your personal branch before syncing
git checkout your-personal-branch

# Sync your personal branch with upstream dev
git fetch upstream
git merge upstream/dev

# Avoid force pushing to shared branches (any branch that is open in PR)
```

Even if you have push rights on the upstream repository, you should create a personal fork. This keeps the Shabad OS repository clean and your personal workflow out of sight.

Branches should be named after the issue they are resolving in the format of `username/issue<issue_number>` (e.g. issue 128 for user bhajneet would be `bhajneet/issue128`). This is how branches will be named if using the recommended VS Code extension: link:https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github[GitHub Pull Requests and Issues].

:::tip PROTIP
If there is no issue related to the work being done, then create an issue for tracking purposes.
:::

See the following GitHub docs for additional guidance:

- [Overview of collaborative development models](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models)
- [Configuring a remote for a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- [Sync a fork of a repository to keep it up-to-date with the upstream repository](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)

### Pull Requests

To enable quick code reviews, create one pull request per issue. Avoid resolving multiple issues in one PR unless they share a root cause. Be sure to follow the [Coding Guidelines](#coding-guidelines) and keep code changes as small as possible. Avoid pure formatting changes to code that has not been modified otherwise. Pull requests should contain tests whenever possible. The pull requests summary should include changes, tests done, visual before and after, time taken to resolve, and linked issues whenever possible.

:::tip PROTIP
Pull Requests are squashed on merge, so title the PR as if it were a single commit according to the first line of [Commit Messages](#commit-messages).
:::
