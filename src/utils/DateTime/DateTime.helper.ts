import { format } from "date-fns";

//Format Keys
// Month	M	1, 2, ..., 12
// Mo	1st, 2nd, ..., 12th
// MM	01, 02, ..., 12
// MMM	Jan, Feb, ..., Dec
// MMMM	January, February, ..., December
// Quarter	Q	1, 2, 3, 4
// Qo	1st, 2nd, 3rd, 4th
// Day of month	D	1, 2, ..., 31
// Do	1st, 2nd, ..., 31st
// DD	01, 02, ..., 31
// Day of year	DDD	1, 2, ..., 366
// DDDo	1st, 2nd, ..., 366th
// DDDD	001, 002, ..., 366
// Day of week	d	0, 1, ..., 6
// do	0th, 1st, ..., 6th
// dd	Su, Mo, ..., Sa
// ddd	Sun, Mon, ..., Sat
// dddd	Sunday, Monday, ..., Saturday
// Day of ISO week	E	1, 2, ..., 7
// ISO week	W	1, 2, ..., 53
// Wo	1st, 2nd, ..., 53rd
// WW	01, 02, ..., 53
// Year	YY	00, 01, ..., 99
// YYYY	1900, 1901, ..., 2099
// ISO week-numbering year	GG	00, 01, ..., 99
// GGGG	1900, 1901, ..., 2099
// AM/PM	A	AM, PM
// a	am, pm
// aa	a.m., p.m.
// Hour	H	0, 1, ... 23
// HH	00, 01, ... 23
// h	1, 2, ..., 12
// hh	01, 02, ..., 12
// Minute	m	0, 1, ..., 59
// mm	00, 01, ..., 59
// Second	s	0, 1, ..., 59
// ss	00, 01, ..., 59
// 1/10 of second	S	0, 1, ..., 9
// 1/100 of second	SS	00, 01, ..., 99
// Millisecond	SSS	000, 001, ..., 999
// Timezone	Z	-01:00, +00:00, ... +12:00
// ZZ	-0100, +0000, ..., +1200
// Seconds timestamp	X	512969520
// Milliseconds timestamp	x	512969520900

const getFormatDateFromUnixTime = (date: string, formatString: string) =>
  format(parseInt(date), formatString);

const getCurrentDate = (formatString = "dd MMM yyyy") =>
  format(new Date(), formatString);

export default { getFormatDateFromUnixTime, getCurrentDate };
