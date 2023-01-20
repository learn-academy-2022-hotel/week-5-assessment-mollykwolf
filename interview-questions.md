# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: 
Calling super in a class allows data to be passed from the parent class to the child class. This relationship is called inheritance. When the child class invokes super it is borrowing the parent class instance varaibles. The syntax is shown below:

class Child < Parent 
  def intialize (child_parameter)
      super (parent_parameter)
  end
end 

Researched answer:
In OOP everything is an object, meaning everything is an instance of a class. Inheritance allows classes to have relationshops with each other. Supercalsses are the common behaviours in a shared class. The parent class has attributes common to all possible children. The child class has attributes speific to the chlid and not the other children. Calling super passes information to the subclass. When the child class invokes super, it is going to use the parent's initalized method and borrow their parameters/instance varaibles. The symbol is < ParentClass, and the syntax is shown below. 

class Child < Parent 
  def intialize (child_parameter)
      super (parent_parameter)
      @create = specific_child_parameter
  end
end  

2. What is a gem?

Your answer: 
A gem is a library of Ruby code. Develops use gems to share and test code. 

Researched answer:
Ruby gems are open source libraries containing Ruby code.The basic components of a gem are : code, documentation, and gemspec. The code includes test. The documentation is generated automatically, and is included in the README file. The gemspec contains the information about the gem inclduing the files and test information. Gems allow developers to use the code within the gem in their own program. Rails is an example of a gem. Rails provides the framework to transform ruby code into web applications. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is database of rows and columns. Postgres is an example of a relational database. 

Researched answer:
A realtional database is a way to structure information in tables of rows and columns. The are used to organize data and create relationships. Relational databases define the name and data type of columns using a schema, making it easy to find and sort information. There are other kind of databases, inlcuding object-oriented databases and network databases. 

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers in a database. They will be automatically generate in Ruby on Rails, and are important because they allows developers to identify individual rows. 

Researched answer:
All tables in a relational database have a primary key. Primary keys must contain unique values and cannot contain null values. Primary keys are important because they are used to identify individual rows. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
 There are five HTTP verbs. "Get" displays data and corresponds to read. "Post" creates data and corresponds to create. "Put" and "patch" replace content and correspond to update. And lastly "delete" which removes data and corresponds to delete. 

Researched answer:
HTTP defines a set of request methods to be performed for a given resource. There are five common verbs. "Get" displays data and corresponds to read. "Post" creates data and corresponds to create. "Put" and "patch" replace content and correspond to update. And lastly "delete" which removes data and corresponds to delete. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: stands for Representational State Transfer and its goals is to bring the HTTP methods and CRUD actions together. They are the structuring routes between the server and the client. 

2. Model validations: confirms the model achieves its purpose

3. Params: allow developers to add more informatino to their program by passing a value to the controller. They make the page more dynamic. 

4. ERB: ia the default template for Rails and is a combination of HTML and Ruby, allowing develops to use data from their databases to make web pages. 

5. API: stands for Applucation programming Interface and passing data in JSON, which has a similar structure to JavaScript.  


