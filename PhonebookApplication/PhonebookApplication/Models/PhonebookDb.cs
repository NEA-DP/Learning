using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PhonebookApplication.Models
{
    public class PhonebookDb : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        static PhonebookDb()
        {
            Database.SetInitializer<PhonebookDb>(new Phonebook());
        }
    }


    public class Phonebook : DropCreateDatabaseIfModelChanges<PhonebookDb>
    {
        public readonly string[] names = {
            "Jacqueline Collins",
            "Cary Williams",
            "Sadie Harper",
            "Jonathan Arnold",
            "Maryann Strickland",
            "Vicki Burton",
            "Clinton Walsh",
            "Woodrow Santiago",
            "Erin Dean",
            "Rhonda Freeman"
        };

        protected override void Seed(PhonebookDb context)
        {
            foreach (var name in names)
            {
                context.Contacts.Add(new Contact
                {
                    Name = name,
                    Email = $"{name.Replace(" ", string.Empty)}@gmail.com",
                    Phone = Math.Abs(name.GetHashCode()).ToString().Substring(0, 6).PadRight(0, '0')
                });
            }
            base.Seed(context);
        }
    }
}