using Exercise1.Interfaces;
using Exercise1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise1
{
    public class Candidato
    {
        protected string _estadoCivil;
        private int _anosExperiencia;
        private string _nomeCandidato;
        private string _tipoCandidato;

        private CalculatedSalaryModel _calculatedSalary;

        public CalculatedSalaryModel CalculatedSalary { get {
                if (_calculatedSalary == null)
                {
                    ISalario salario = null;
                    switch(_tipoCandidato)
                    {
                        case "Senior": salario = new SalarioSenior(_salarioBase, _estadoCivil); break;
                        case "Junior": salario = new SalarioNormal(_salarioBase, _anosExperiencia, _estadoCivil); break;
                    }
                    
                    _calculatedSalary = salario.CalculateSalary();
                }
                return _calculatedSalary;
            } }

        private const double _salarioBase = 650;

        public Candidato (int anosExperiencia, string estadoCivil, string nomeCandidato, string tipoCandidato) //HOTKEY: ctor \t\t
        {
            _anosExperiencia = anosExperiencia;
            _estadoCivil = estadoCivil;
            _nomeCandidato = nomeCandidato;
            _tipoCandidato = tipoCandidato;
        }

        public string GetSalarioBrutoString ()
        {
            return _nomeCandidato + ": " + CalculatedSalary.SalarioLiquido;
        }
    }
}
