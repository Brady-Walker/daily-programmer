'use strict';

// dp - 10-17-16
// https://www.reddit.com/r/dailyprogrammer/comments/57zcbm/20161017_challenge_288_easy_detecting_alliteration/
// started 10-18-16

let input = `3
Peter Piper Picked a Peck of Pickled Peppers
Bugs Bunny likes to dance the slow and simple shuffle
You'll never put a better bit of butter on your knife`

let ignoredWords = `I
a
about
an
and
are
as
at
be
by
com
for
from
how
in
is
it
of
on
or
that
the
this
to
was
what
when
where
who
will
with
the`

let ignoredArr = ignoredWords.split("\n");

console.log(ignoredArr);
