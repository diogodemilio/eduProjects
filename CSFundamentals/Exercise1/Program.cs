using System;

namespace Exercise1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Candidato candidato1 = new Candidato(1, "Solteiro", "Diogo", "Junior");
            Candidato candidato2 = new Candidato(1, "Solteiro", "Micael", "Senior");


            Console.WriteLine(candidato1.GetSalarioBrutoString());
            Console.WriteLine(candidato2.GetSalarioBrutoString());
            //Console.WriteLine(candidato1.SalarioBruto);
            //Console.WriteLine(candidato2.SalarioBruto);
            //Console.WriteLine(candidato3.SalarioBruto);
            //Console.WriteLine(candidato4.SalarioBruto);
            //Console.WriteLine(candidato5.SalarioBruto);
            //Console.WriteLine(candidato6.SalarioBruto);


            //Console.WriteLine(candidate1.GetNetSalary() + "\n");
            //Candidato candidate2 = new Candidato(2500, 10, "Casado");            
            //Console.WriteLine(candidate2.GetGrossSalary() + "\n");

            //Console.WriteLine(candidate1.GetGrossSalary() + "\n" + candidate1.GetTaxDiscount() + "\n" + candidate1.GetNetSalary());
            //Console.WriteLine("\n");
            //Console.WriteLine(candidate2.GetGrossSalary() + "\n" + candidate2.GetTaxDiscount() + "\n" + candidate2.GetNetSalary());


            //Console.WriteLine(salarioBruto + "\n" + valorDescontos + "\n" + salarioLiquido);
        }


    }
}
