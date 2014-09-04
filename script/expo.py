def index(req,exponential,val):
    val = int(val) #convert string to int
    exponential = int(exponential) #convert string to int
    operation = make_exponentiater(exponential)
    return operation(val)

def make_exponentiater(e):
    return lambda(x): pow(x,e)


