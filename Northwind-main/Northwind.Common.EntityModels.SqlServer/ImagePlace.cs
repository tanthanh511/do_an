using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("ImagePlace")]
public partial class ImagePlace
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("imgLink")]
    [StringLength(4000)]
    public string? ImgLink { get; set; }

    [Column("placeID")]
    public Guid? PlaceId { get; set; }

    [ForeignKey("PlaceId")]
    [InverseProperty("ImagePlaces")]
    public virtual Blog? Place { get; set; }
}
