# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# pseudo code 
# input : array and single letter
# output: subset of the array 
# create a method called mustInclude 
# select the elements that include the letter you pass in 

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


def mustInclude(array, value)
  array.select do |string|
    string.include?(value)
  end
end 

# REFACTOR/short hand 
def mustInclude (array, value)
  array.select { |string| string.include? (value) }
end 

p mustInclude(beverages_array, letter_o)
# ["coffee", "soda water"]

#---------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# pseudo code 
# input: hash
# output: an alphabetical array
# create a method that takes in a hash 
# select the values
# get rid of the nested array 
# sort in and alphabetical order 

def alphabetical (hash)
  hash.values.flatten.sort
end 

p alphabetical(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model)
    @model = model 
    @wheels = 2
    @current_speed = 0
  end
  def bike_info
    "The #{model} bike has #{wheels} and is going #{current_speed} mph."
  end
end

my_bike = Bike.new ('Trek')
p my_bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model)
    @model = model 
    @wheels = 2
    @current_speed = 0
  end
  def bike_info
    "The #{model} bike has #{wheels} and is going #{current_speed} mph."
  end
  def pedal_faster (increase_speed)
    @current_speed = current_speed + (increase_speed) 
  end
  def brake (decreased_speed)
    @current_speed = current_speed - (decreased_speed)
    if current_speed < 0
      return 0
    else 
      return current_speed
    end 
  end
end

p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
