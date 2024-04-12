using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Shared;

[Table("Account")]
public partial class Account
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("email")]
    [StringLength(1000)]
    public string? Email { get; set; }

    [Column("userName")]
    [StringLength(50)]
    public string? UserName { get; set; }

    [Column("password")]
    [StringLength(50)]
    [Unicode(false)]
    public string? Password { get; set; }

    [Column("bio")]
    public string? Bio { get; set; }

    [Column("avata")]
    [StringLength(100)]
    public string? Avata { get; set; }

    [Column("status")]
    public int? Status { get; set; }
}
