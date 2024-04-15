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
    public Guid Id { get; set; }

    [StringLength(1000)]
    public string? Name { get; set; }

    [StringLength(500)]
    public string? Address { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? OpenTime { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CloseTime { get; set; }

    public double? Price { get; set; }

    public Guid? CategoryId { get; set; }

    public Guid? WardId { get; set; }

    [ForeignKey("CategoryId")]
    [InverseProperty("Places")]
    public virtual Category? Category { get; set; }

    [InverseProperty("Place")]
    public virtual ICollection<PlaceImage> PlaceImages { get; } = new List<PlaceImage>();

    [ForeignKey("WardId")]
    [InverseProperty("Places")]
    public virtual Ward? Ward { get; set; }
}
