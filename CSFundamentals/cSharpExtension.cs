using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Adentis.ADN4Bizz.Service.Models.User;

namespace Adentis.ADN4Bizz.Service.Models.Meetings
{
	public class ProspectionModel
	{
		public Guid Id { get; set; }
		public string Company { get; set; }
		public string Interlocutor { get; set; }
		public DateTime? MeetingDate { get; set; }
		public string Observations { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
		public bool? IsDeleted { get; set; }
		public Guid UsersId { get; set; }

		//public virtual UserModel Users { get; set; }
				
	}

	public static class PropspectionModelExtensions
	{
		public static ProspectionModel FromEntities(this Domain.Entities.Prospection prospection)
		{
			return new ProspectionModel()
			{
				Id = prospection.Id,
				MeetingDate = prospection.MeetingDate,
				Observations = prospection.Observations,
				CreatedAt = prospection.CreatedAt,
				UpdatedAt = prospection.UpdatedAt,
				IsDeleted = prospection.IsDeleted,
				UsersId = prospection.UsersId,
				Company = prospection.Company,
				Interlocutor = prospection.Interlocutor

			};
		}
		public static Domain.Entities.Prospection ToEntities(this ProspectionModel obj)
		{
			return new Domain.Entities.Prospection()
			{
				Id = obj.Id,
				MeetingDate = obj.MeetingDate,
				Observations = obj.Observations,
				CreatedAt = obj.CreatedAt,
				UpdatedAt = obj.UpdatedAt,
				IsDeleted = obj.IsDeleted,
				UsersId = obj.UsersId,
				Company = obj.Company,
				Interlocutor = obj.Interlocutor
			};
		}
	}
}