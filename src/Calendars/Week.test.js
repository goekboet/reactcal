import Week from './Week'
import testdata from './Week.testdata'

describe('Week calendar', () => {
    const refdate = new Date(2017, 2, 5)
    it('gives correct days', () => {
        const days = Week(refdate).days;
        expect(days).toEqual(testdata.Week.days)
    })
})