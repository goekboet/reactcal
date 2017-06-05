import { Hours, Headers } from './StateFuncs';
import { RefHours, refHeaders } from './StateFuncs.testdata';

describe('Statefuncs', () => {
    const refDate = new Date(2017, 5, 4);
    const headers = Headers(refDate);
    const hours = Hours(headers);
    
    it('makes correct headers', () => {
        expect(headers).toEqual(refHeaders);
    })

    it('makes well formed hours', () => {
        expect(hours).toEqual(RefHours);
    });
});

