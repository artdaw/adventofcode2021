import pytest
import os
from day1.collect_measurements import collect_measurements, collect_measurements_sliding_window

directory_path = os.getcwd()

lines = None

with open(directory_path + '/../inputs/day1.txt', 'r+') as input:
    lines = list(
        map(lambda x: int(x), input.read().splitlines())
    )

increased_measurements_testdata = [
    (lines, 1564),
    ([199, 200, 208, 210, 200, 207, 240, 269, 260, 263], 7),
    ([299, 303, 302, 301, 300], 1),
    ([], 0),
    (None, 0),
]

increased_measurements_testdata_window = [
    (lines, 1611),
    ([199, 200, 208, 210, 200, 207, 240, 269, 260, 263], 5),
    ([], 0),
    (None, 0),
]


@pytest.mark.parametrize("arr,expected", increased_measurements_testdata)
def test_returns_increased_measurements(arr, expected):
    assert collect_measurements(arr) == expected


@pytest.mark.parametrize("arr,expected", increased_measurements_testdata_window)
def test_returns_increased_measurements(arr, expected):
    assert collect_measurements_sliding_window(arr) == expected
