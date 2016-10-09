var main = function(){
	 
    $(function(){
        $("#typed").typed({
            strings: ["Plinth"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            //stringsElement: $('#typed-strings'),
            // typing speed
            typeSpeed: 140,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
$("#typed1").typed({
            strings: ["Techno - Management Literary Fest"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            //stringsElement: $('#typed-strings'),
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1110,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    
     $("#typedx").typed({
            
            stringsElement: $('#typed-quote'),
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1110,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });
};

$(document).ready(main);
