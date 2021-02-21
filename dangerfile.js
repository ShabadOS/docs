/* eslint-disable import/no-extraneous-dependencies */
import { danger, fail } from 'danger'

const lint = require( '@commitlint/lint' ).default
const load = require( '@commitlint/load' ).default

const CONFIG = require( './commitlint.config' )

load( CONFIG ).then( opt => {
  lint( danger.github.pr.title, opt.rules ).then( report => {
    if ( !report.valid ) {
      const failMessage = 'Commitlint failed on PR Title.'

      const failedErrors = report.errors
        .map( ( { message }, i ) => `${i + 1}. ${message}\n` )
        .join( '' )

      const commitMessageDocs = 'Checkout our [docs on commit messages](https://docs.shabados.com/community/coding-guidelines#commit-messages)'

      const errorMessage = [ failMessage, failedErrors, commitMessageDocs ].join( '\n' )

      fail( errorMessage )
    }
  } )
} )
