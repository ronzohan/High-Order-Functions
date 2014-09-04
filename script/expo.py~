def index(req,operation,val):
    if operation == 1:
        square = make_exponentiater(2)
        return square(int(val))
    else:
        cube = make_exponentiater(3)
        return cube(int(val))

def make_exponentiater(e):
    return lambda(x): pow(x,e)
