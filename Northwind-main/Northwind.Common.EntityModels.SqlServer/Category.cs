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
    [Column("id")]
    public Guid Id { get; set; }

    [Column("categoryName")]
    [StringLength(100)]
    public string? CategoryName { get; set; }

    [InverseProperty("Category")]
    public virtual ICollection<Place> Places { get; } = new List<Place>();
}
