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

import TranslocParser from './TranslocParser';

class Configuration {
    constructor() {
        this.transloc_key = '';

        this.center = [35.7740151,-78.6449387];
        this.agencies = [
            {
                name: 'Routes',
                parser: new TranslocParser(this.transloc_key, '20', 'https://raleigh.gotransitapp.com/api/no.php/')
            }
        ];
    }
}

export default Configuration;
