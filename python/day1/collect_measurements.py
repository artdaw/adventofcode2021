from collections.abc import Sequence


def collect_measurements(arr: Sequence[str]) -> int:
    if not arr or len(arr) == 0:
        return 0

    increased = 0

    for i in range(0, len(arr)):
        if arr[i] > arr[i-1]:
            increased = increased + 1
    return increased


def collect_measurements_sliding_window(arr: Sequence[str]) -> int:
    if not arr or len(arr) == 0:
        return 0

    def sum(array, index): return array[index] + \
        array[index + 1] + array[index + 2]
    
    increased = 0

    for i in range(0, len(arr)):
        if len(arr) > i + 3 and sum(arr, i + 1) > sum(arr, i):
            increased = increased + 1
    
    return increased
