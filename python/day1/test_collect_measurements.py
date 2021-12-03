import pytest

from day1.collect_measurements import collect_measurements

testdata = [
    ([299, 301, 302, 303, 200], 3),
    ([299, 303, 302, 301, 300], 1),
    ([], 0),
    (None, 0),
]


@pytest.mark.parametrize("arr,expected", testdata)
def test_returns_3_increased_measurements(arr, expected):
    assert collect_measurements(arr) == expected
