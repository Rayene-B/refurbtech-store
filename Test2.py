#For Loops: allows you to repeat an action without rewriting the same code
for i in range(2):
    print("Hello")
#While Loops: as long as a condition is met, keep looping
i = 6
while i < 5:
  print(i)
i = i + 1
#Testing if else:
#if followed by condition then colon : , else followed by colon:
age = 16
if age>18:
    print("Regular Price")
else:
    print("Discount Applied")
#elif is short for else if:
#else if/elif = if the previous condition was not met, but these are conditions are...
Score = 175
if Score > 170:
    print("High Pass")
elif Score > 160:
    print("Low Pass")
else:
    print("Failed")
#Nesting
is_student = True
age = 15
if is_student:
    if age <18:
        print("50% Discount Applied")
    elif age>18:
        print("20% Discount Applied")
else:
    print("No Discount Applied")