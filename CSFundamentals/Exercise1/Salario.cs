using Exercise1.Interfaces;
using Exercise1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise1
{
    public class SalarioNormal : ISalario
    {
        private double _salarioBase;
        private int _anosExperiencia;
        private string _estadoCivil;

        public SalarioNormal (double salarioBase, int anosExperiencia, string estadoCivil)
        {
            _salarioBase = salarioBase;
            _anosExperiencia = anosExperiencia;
            _estadoCivil = estadoCivil;
        }

        public CalculatedSalaryModel CalculateSalary()
        {
            CalculatedSalaryModel result = new CalculatedSalaryModel();
            result.SalarioBruto = GrossSalary();
            result.ValorDescontos = TaxDiscounts(result.SalarioBruto);
            result.SalarioLiquido = NetSalary(result.SalarioBruto, result.ValorDescontos);

            return result;
        }



        private double GrossSalary()
        {
            return _salarioBase + (_anosExperiencia * 0.05 * _salarioBase);
        }


        private double TaxDiscounts(double grossSalary)
        {
            switch (_estadoCivil)
            {
                case "Solteiro":
                    return grossSalary * 0.2;
                case "Casado":
                    return grossSalary * 0.15;
            }

            return 0;
        }

        private double NetSalary(double salarioBruto, double valorDescontos)
        {
            return salarioBruto - valorDescontos;
        }
    }
}
