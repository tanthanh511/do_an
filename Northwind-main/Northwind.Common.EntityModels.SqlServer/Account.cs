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
    public Guid Id { get; set; }

    [StringLength(35)]
    public string? Email { get; set; }

    [StringLength(50)]
    public string? Username { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? Password { get; set; }

    public string? Bio { get; set; }

    public string? Avatar { get; set; }

    public int? Status { get; set; }
}
