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
        this.agencies = [
            {
                name: 'Routes',
                parser: new BusTimeParser('https://raleigh.gotransitapp.com/api/no.php',
                                          bustime_key),
                options: {
                    parseNameFn: (n) => {
                        // remove the beginning route number
                        // from the name
                        return n.replace(/^\w+\s+/, '');
                    }
                }
            }
        ];
    }
}

export default Configuration;
