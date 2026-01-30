# S1_IF_02

def grade(score):
    if score < 0 or score > 100:
        return None
    
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

print(grade(95))
print(grade(59))
print(grade(105)) # None