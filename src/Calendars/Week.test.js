import Week from './Week'
import testdata from './Week.testdata'

describe('Week calendar', () => {
    const refdate = new Date(2017, 2, 5);
    const week = Week(refdate);

    it('gives correct days', () => {
        expect(week.days).toEqual(testdata.Week.days);
    });
    it('gives right title', () => {
        expect(week.title).toEqual(testdata.Week.title);
    })

    it('gives the correct month', () => {
        expect(week.month).toEqual(testdata.Week.month);
    })
})