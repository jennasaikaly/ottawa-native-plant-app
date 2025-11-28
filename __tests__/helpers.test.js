const { format_date, format_plural, url_format } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural correctly adds an s to any number other than 1', () => {
    const word = "tiger";
    const amount = 2;
    expect(format_plural(word, amount)).toBe('tigers');
})

test('url_format removes "www." from website url', () => {
    const url1 = url_format('http://test.com/page/1');
    const url2 = url_format('https://www.coolstuff.com/abcdefg/');
    const url3 = url_format('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
})
