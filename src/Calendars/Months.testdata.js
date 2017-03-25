const weeks = [
    {
        key: "2017-9", days: [
            { key: "2017-02-27", week: "v9", date: "27", belongs: false },
            { key: "2017-02-28", week: "v9", date: "28", belongs: false },
            { key: "2017-03-01", week: "v9", date: "1", belongs: true },
            { key: "2017-03-02", week: "v9", date: "2", belongs: true },
            { key: "2017-03-03", week: "v9", date: "3", belongs: true },
            { key: "2017-03-04", week: "v9", date: "4", belongs: true },
            { key: "2017-03-05", week: "v9", date: "5", belongs: true }
        ]
    },
    {
        key: "2017-10", days: [
            { key: "2017-03-06", week: "v10", date: "6", belongs: true },
            { key: "2017-03-07", week: "v10", date: "7", belongs: true },
            { key: "2017-03-08", week: "v10", date: "8", belongs: true },
            { key: "2017-03-09", week: "v10", date: "9", belongs: true },
            { key: "2017-03-10", week: "v10", date: "10", belongs: true },
            { key: "2017-03-11", week: "v10", date: "11", belongs: true },
            { key: "2017-03-12", week: "v10", date: "12", belongs: true }
        ]
    },
    {
        key: "2017-11", days: [
            { key: "2017-03-13", week: "v11", date: "13", belongs: true },
            { key: "2017-03-14", week: "v11", date: "14", belongs: true },
            { key: "2017-03-15", week: "v11", date: "15", belongs: true },
            { key: "2017-03-16", week: "v11", date: "16", belongs: true },
            { key: "2017-03-17", week: "v11", date: "17", belongs: true },
            { key: "2017-03-18", week: "v11", date: "18", belongs: true },
            { key: "2017-03-19", week: "v11", date: "19", belongs: true }
        ]
    },
    {
        key: "2017-12", days: [
            { key: "2017-03-20", week: "v12", date: "20", belongs: true },
            { key: "2017-03-21", week: "v12", date: "21", belongs: true },
            { key: "2017-03-22", week: "v12", date: "22", belongs: true },
            { key: "2017-03-23", week: "v12", date: "23", belongs: true },
            { key: "2017-03-24", week: "v12", date: "24", belongs: true },
            { key: "2017-03-25", week: "v12", date: "25", belongs: true },
            { key: "2017-03-26", week: "v12", date: "26", belongs: true }
        ]
    },
    {
        key: "2017-13", days: [
            { key: "2017-03-27", week: "v13", date: "27", belongs: true },
            { key: "2017-03-28", week: "v13", date: "28", belongs: true },
            { key: "2017-03-29", week: "v13", date: "29", belongs: true },
            { key: "2017-03-30", week: "v13", date: "30", belongs: true },
            { key: "2017-03-31", week: "v13", date: "31", belongs: true },
            { key: "2017-04-01", week: "v13", date: "1", belongs: false },
            { key: "2017-04-02", week: "v13", date: "2", belongs: false }
        ]
    }
];

const label = "Mars 2017";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {weeks, label, weekdays};