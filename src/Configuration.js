/* -*- Mode: rjsx -*- */

/*******************************************
 * Copyright (2018)
 *  Marcus Dillavou <line72@line72.net>
 *  http://line72.net
 *
 * Montclair:
 *  https://github.com/line72/montclair
 *  https://montclair.line72.net
 *
 * Licensed Under the GPLv3
 *******************************************/

import BusTimeParser from './BusTimeParser';

class Configuration {
    constructor() {
        this.center = [35.7740151,-78.6449387];
        const bustime_key = 'b6ZhEjp3j5aRri8nWdtfQD23m';
        this.tileserver = {
            url: 'https://raleigh.gotransitapp.com/tiles/{z}/{x}/{y}.png',
            subdomains: ''
        };
        this.agencies = [
            {
                name: 'Routes',
                parser: new BusTimeParser('https://raleigh.gotransitapp.com/api/no.php',
                                          bustime_key),
                options: {
                    parseNameFn: (n) => {
                        // remove the beginning route number
                        // from the name
                        //return n.replace(/^\w+\s+/, '');
                        
                        // !mwd - AS of 20240125 - We no longer
                        //  need to do this, as Raleigh's provider
                        //  has fixed it
                        return n;
                    }
                }
            }
        ];
    }
}

export default Configuration;
