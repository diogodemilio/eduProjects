using Exercise1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise1.Interfaces
{
    public interface ISalario
    {
        public CalculatedSalaryModel CalculateSalary();
    }
}
