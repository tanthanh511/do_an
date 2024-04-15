using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("PlaceImage")]
public partial class PlaceImage
{
    [Key]
    public Guid Id { get; set; }

    public string? Imglink { get; set; }

    public Guid? PlaceId { get; set; }

    [ForeignKey("PlaceId")]
    [InverseProperty("PlaceImages")]
    public virtual Place? Place { get; set; }
}
