def index(req,operation,val):
    val = int(val)
    operation = int(operation)
    if operation == 1:
        square = make_exponentiater(2)
        return square(val)
    else:
        cube = make_exponentiater(3)
        return cube(val)

def make_exponentiater(e):
    return lambda(x): pow(x,e)


square = make_exponentiater(2)
print square(2)

