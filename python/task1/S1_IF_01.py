# S1_IF_01

def shipping_cost(weight_kg, is_member):
    # validation
    if not isinstance(weight_kg, (int, float)) or weight_kg <= 0:
        return None
    
    cost = 0
    if weight_kg <= 1:
        cost = 10
    elif weight_kg <= 5:
        cost = 20
    else:
        cost = 30
        
    if is_member:
        cost = cost * 0.8  # 20% discount
        
    return cost

print(shipping_cost(0.5, True))
print(shipping_cost(10, False))
print(shipping_cost(-5, False)) # None