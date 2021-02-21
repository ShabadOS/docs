/* eslint-disable import/no-extraneous-dependencies */
import { danger, fail } from 'danger'

const lint = require( '@commitlint/lint' ).default
const load = require( '@commitlint/load' ).default

const CONFIG = {
  extends: [ '@commitlint/config-conventional' ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'body-max-line-length': [ 0 ],
  },
}

load( CONFIG ).then( opt => {
  lint( danger.github.pr.title, opt.rules ).then( report => {
    if ( !report.valid ) {
      const failMessage = 'Commitlint failed on PR Title.'

      const failedErrors = report.errors
      // eslint-disable-next-line no-plusplus, no-param-reassign
        .map( ( { message }, i ) => `${++i}. ${message}\n` )
        .reduce( ( prev, next ) => `${prev}${next}` )

      const commitMessageDocs = 'Checkout our [docs on commit messages](https://docs.shabados.com/community/coding-guidelines#commit-messages)'

      const errMsg = [ failMessage, failedErrors, commitMessageDocs ].reduce( ( prev, next ) => `${prev}\n${next}` )

      fail( errMsg )
    }
  } )
} )
