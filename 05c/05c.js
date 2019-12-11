function testArguments () {
    function generateError ( numArgs ) {
		var e = new Error('Invalid arguments')
		e.name = 'Application';
		e.stack = 'Function needs 3 arguments, but only 1 present'
        throw e
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    }
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}
testArguments ( "Google" )
