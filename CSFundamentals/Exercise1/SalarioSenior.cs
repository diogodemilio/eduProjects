using Exercise1.Interfaces;
using Exercise1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise1
{
    class SalarioSenior : ISalario
    {
        private double _salarioBase;
        private string _estadoCivil;
        private double _subsidioRefeicao;

        public SalarioSenior(double salarioBase, string estadoCivil)
        {
            _salarioBase = salarioBase;
            _estadoCivil = estadoCivil;
            _subsidioRefeicao = 160;
        }
      
        public CalculatedSalaryModel CalculateSalary()
        {
            double salarioBrutoBase = SalarioBrutoBase();
            CalculatedSalaryModel result = new CalculatedSalaryModel();
            result.SalarioBruto = GrossSalary(salarioBrutoBase);
            result.ValorDescontos = TaxDiscounts(salarioBrutoBase);
            result.SalarioLiquido = NetSalary(result.SalarioBruto, result.ValorDescontos);

            return result;
        }

        private double SalarioBrutoBase()
        {
            return _salarioBase + 2000;
        }

        private double GrossSalary(double salarioBrutoBase)
        {
            return salarioBrutoBase + _subsidioRefeicao;
        }

        private double TaxDiscounts(double grossSalary)
        {
            return grossSalary * 0.24;
        }

        private double NetSalary(double salarioBruto, double valorDescontos)
        {
            return salarioBruto - valorDescontos;
        }
    }
}
