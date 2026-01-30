# S1_IF_03

def normalize_name(x):
    if not x: # checks for None, empty string, etc.
        return "Anonymous"
    
    cleaned = x.strip()
    if cleaned == "":
        return "Anonymous"
        
    return cleaned

print(normalize_name(None))
print(normalize_name("  John  "))
print(normalize_name("   "))