using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("Category")]
public partial class Category
{
    [Key]
    public Guid Id { get; set; }

    [StringLength(100)]
    public string? Name { get; set; }

    [InverseProperty("Category")]
    public virtual ICollection<Place> Places { get; } = new List<Place>();
}
