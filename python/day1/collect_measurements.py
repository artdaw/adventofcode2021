from collections.abc import Sequence


def collect_measurements(arr: Sequence[str]) -> int:
    if not arr or len(arr) == 0:
        return 0

    all_measurements = arr[1:]
    decreased = 0

    for i in range(0, len(all_measurements)):
        if all_measurements[i] < all_measurements[i-1]:
            decreased = decreased + 1
    return len(all_measurements) - decreased
