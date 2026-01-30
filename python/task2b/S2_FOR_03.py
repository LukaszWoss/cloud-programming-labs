# S2_FOR_03

def sum_until(nums, threshold):
    total = 0
    for n in nums:
        if total + n > threshold:
            break
        total += n
    return total

print(sum_until([10, 20, 30], 25))