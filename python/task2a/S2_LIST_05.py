# S2_LIST_05

def stats(nums):
    if not nums:
        return None
        
    return {
        "min": min(nums),
        "max": max(nums),
        "avg": sum(nums) / len(nums),
        "sum": sum(nums)
    }

print(stats([10, 2, 30, -5]))