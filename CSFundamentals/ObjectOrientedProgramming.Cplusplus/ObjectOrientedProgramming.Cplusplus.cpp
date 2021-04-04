// ObjectOrientedProgramming.CodeBeauty.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
using std::string;


//Abstraction principle
class IEmployee {
    //Abstract function, whoever decides to sign IEmployee contract, it must implement this method
    virtual void AskForPromotion() = 0; 
};

class Employee : IEmployee {

/// <summary>
/// Private - Acesss inside class; (Default)
/// Public - Access outside class
/// </summary>
private: 
    string Name;
    string Company;
    int Age;

public:
    /// <summary>
    /// Class Constructor
    /// </summary>
    /// <param name="name"></param>
    /// <param name="company"></param>
    /// <param name="age"></param>
    Employee(string name, string company, int age) {
        Name = name;
        Company = company;
        Age = age;
    }

    void setName(string name) {
        Name = name;
    }

    string getName() {
        return Name;
    }

    void setCompany(string company) {
        Company = company;
    }

    string getCompany() {
        return Company;
    }
    
    void setAge(int age) {
        if (age >= 18)
            Age = age;
    }

    int GetAge() {
        return Age;
    }
    /// <summary>
    /// Class Method
    /// </summary>
    void IntroduceYourself() {
        std::cout << "Name - " << Name << std::endl;
        std::cout << "Company - " << Company << std::endl;
        std::cout << "Age - " << Age << std::endl;
    }

    void AskForPromotion() {
        if (Age > 30)
            std::cout << Name << " got promoted!" << std::endl;
        else
            std::cout << Name << ", sorry, NO promotion for you!" << std::endl;
    }
};


int main()
{
    Employee employee1 = Employee("Diogo", "CodeBeauty", 25);
    employee1.IntroduceYourself();

    employee1.AskForPromotion();
    std::cout << employee1.getName() << " is " << employee1.GetAge() << " years old!" << std::endl;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
