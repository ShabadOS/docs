---
title: Project Management
---

Thank you for your interest in project management. This document is primarily intended for two audiences:

1. Developers seeking to understand the planning of Shabad OS projects
2. Future maintainers seeking to help initiate, execute, and control the work of Shabad OS projects. The second group includes triage and administrative roles.

## Roadmap

Our roadmap consists of high-level objectives which are done on an organization level, not the project/repo level. These goals are established for the long-term (6-12 months). The roadmap is developed based on the previous roadmap and topics we've heard from the community (see how to provide [feedback](./support-and-feedback.md)).

These high-level objectives are decided by the [project owners](https://github.com/orgs/ShabadOS/people) and steer our development iterations.

## Development iteration

Many of our volunteers already have professional and student commitments. Some participate in the Shabad OS project as a labor of love or as a part of their [_sewa_](https://en.wikipedia.org/wiki/Selfless_service) or selfless service to benefit other human beings or society. It is, therefore, difficult to constrain our community's efforts within professional scheduling deadlines.

We follow a hybridized model which focuses on prioritizing issues that need to be completed on a weekly iteration. Our goal is to release a stable build no more than once a month.

Issues

1. Issue is assigned an impact level depending on how many users it affects
2. Issue completion is estimated on a point scale (1 point = 1 hour)
3. Issue is prioritized to a _queue_

Queue

1. Queue is a list of issues that require resolution most immediately
2. Queue is resolvable in one work week (assuming all expectations of volunteer work is met)
3. Queue is prioritized to resolve any bugs introduced from any previous queue
4. Queue is comprised of varying difficulty issues which include issues that are good for newcomers

This model affords our project flexibility around changing volunteer availability. Our queue does not have a completion deadline.

## Triage

Our development iteration all begins with issue tracking. Proper processing of issues and ranking of issues in terms of importance and priority is essential for planning. All of our project repos have the following labels for issues:

- Difficulty - Ranging from 0 to over 100 points. Used to estimate how long an issue's resolution would take.
- Impact - Ranging from 0 to 100%. Used to estimate the percentage of users this issue or it's resolution affects.
- Status - Used to track progress of an issue.
- Type - Used to help prioritize issues that are features or fixes (with fixes often getting the higher priority).

NOTE: Issues with a difficulty over 10 points should always be re-examined to see if they can be broken down into smaller tasks

### Issue Tracking

Issue tracking is the heart of project management. From this standpoint, the most important label is the `status`. Our status labels are as follows:

| Role     | Status                 | Description                                        |
| -------- | ---------------------- | -------------------------------------------------- |
| PM       | `Hold` + `no:assignee` | PM doesn't want to evaluate                        |
| PM       | `? ? ?`                | PM unsure of significance                          |
| PM       | `Score`                | PM wants estimation details to triage further      |
| PM       | `To Do`                | PM wants it done and knows assignee can resolve    |
| Either   | `Vague`                | Assignee can't resolve without further details     |
| Assignee | `3hard5me`             | Assignee can't resolve, but knows PM wants it done |
| Either   | `Hold` (with assignee) | Work blocked by another issue's resolution         |
| Assignee | `WIP`                  | Work is in progress                                |
| Assignee | `Merge`                | Issue is linked to PR that will resolve it         |

See https://github.com/ShabadOS/actions/issues/3#issuecomment-627035194 for more details.

:::caution WARNING
The assignee of the issue should the one estimating difficulty. This may or may not be the person who is triaging the issue.
:::

### Closing of issues

Issues that are duplicates of others can be linked and closed. Vague issues requiring more info from the user without a reply for 14 days or bugs that can't be reproduced can be closed. From time to time it is good to go through and see if there are any particularly old issues still around and whether they need to be re-assessed or closed.

## Maintain

Maintainers, Admins, and Owners of Shabad OS are responsible for handling pull requests to the code base, building master and releases of the repo, updating the release notes for any possible SemVer changes, and being generally knowledgeable about the security of the Shabad OS repo in terms of source code, build pipeline, and code/server related topics.

### Release Process

We should have no more than two builds for end users:

- [Next](https://github.com/ShabadOS/desktop/releases) - triggered on each PR / commit to main branch.
- [Latest](https://github.com/ShabadOS/desktop/releases/latest) - built on manual workflow run of main branch, versioning based on commit history

When merging a PR into `main`, provided that the PR does not have a `skip-next-release` tag, CI will:

- Read commit history after latest `tag`
- Choose either a SemVer or next bump (e.g. `2.5.0-next.1` => `2.6.0-next.1` or `2.5.0-next.2`)
- Update changelog file
- Build and publish to GitHub the next release

When manually releasing latest off `main`, the workflow named `release`:

- Update next release to semver of release in changelog header
- Push updated release notes: rename next release folder as SemVer of release, create new folder for next release
- Remove any next components (e.g. `2.5.0-next.1` => `2.5.0`)
- Build and publish to GitHub releases

#### How CI chooses SemVer bump

| "BREAKING CHANGE" is on it's own line      | Major bump (e.g. 2.5.6 => 3.0.0) |
| ------------------------------------------ | -------------------------------- |
| Commit message begins with "feat"          | Minor bump (e.g. 2.5.6 => 2.6.0) |
| Commit message begins with "fix" or "perf" | Patch bump (e.g. 2.5.6 => 2.5.7) |
| None of the above criteria                 | No bump (e.g. 2.5.6 => 2.5.6)    |

### Updating release notes

Maintainers and Admins are responsible to show what changes were made, and when they were made, for releases. It is important to include breaking changes (incompatible API changes) or habit-reforming behaviors (UX) for both contributors and end-users.

Future release notes should be added as asciidoc files in the corresponding folder (e.g. `./release-notes/latest.adoc`). Linked images/animations should be placed in a folder (e.g. `./release-notes/assets/latest/`).

:::note
When merging into `master`, CI will automatically rename `latest.adoc` to sub-SemVer format (e.g. `3.0.adoc`). The `master` branch should not have a `latest.adoc` file. Patches should be included as bullet-lists under a header of bold text for their relevant `major.minor.adoc` release note.
:::

Begin your release notes with a section for key highlights and their short descriptions. Since we use asciidoc, a table of contents will automatically be generated from the headers. It is unnecessary to include every header in the key highlights section.

:::note
While working on prerelease notes in `dev` branch, keep editing the `latest.adoc` file. Do not create new files for each prerelease.
:::

:::note
It is necessary to explain in each release note that we are following [Semantic Versioning](https://semver.org/) for version labelling.
:::

2<sup>nd</sup> level headers should be friendly [scope names](https://github.com/ShabadOS/.github/blob/master/CONTRIBUTING.md#scope). 3<sup>rd</sup> level headers can be the notes for what was added, changed, deprecated, fixed, removed, or secured.

End the release notes with the following 2<sup>nd</sup> level headers: (1, optional) Preview, (2, optional) Notable Changes, and (3, required) Thank You:

1. It is helpful to prepare users with experimental features that may have been introduced and a short-duration peek towards our next releases.
2. It is important to include a dedicated way for users to see changes that a user needs to prepare for (adapting to a different UX) or avoid upgrading to (breaking changes). Does not have to include all key highlights from the beginning of the release notes.
3. It is humbling to thank our community for their participation. This should include not only those contributing pull requests but also those helping to triage issues for tracking purposes or any other project management related work. Use GitHub handles when possible.

:::info IMPORTANT
The maintainer/admin writing the release notes must not be excluded from the thank you section as it could be used by other team members for tracking purposes or future maintainers/admins.
:::
