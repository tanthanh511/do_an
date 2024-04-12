using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("Place")]
public partial class Place
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("name")]
    [StringLength(1000)]
    public string? Name { get; set; }

    [Column("address")]
    public string? Address { get; set; }

    [Column("openTime", TypeName = "datetime")]
    public DateTime? OpenTime { get; set; }

    [Column("closeTime", TypeName = "datetime")]
    public DateTime? CloseTime { get; set; }

    [Column("price", TypeName = "money")]
    public decimal? Price { get; set; }

    [Column("categoryID")]
    public Guid? CategoryId { get; set; }

    [Column("wardID")]
    public Guid? WardId { get; set; }

    [ForeignKey("CategoryId")]
    [InverseProperty("Places")]
    public virtual Category? Category { get; set; }

    [ForeignKey("WardId")]
    [InverseProperty("Places")]
    public virtual Ward? Ward { get; set; }
}
