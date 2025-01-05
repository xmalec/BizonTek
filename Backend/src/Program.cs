using Web;
using Web.Options;
using Web.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHealthChecks();
builder.Services.ConfigureStaticFiles();
builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});
builder.Services.Configure<EmailSettingOptions>(builder.Configuration.GetSection(EmailSettingOptions.SectionName));
builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseHealthChecks("/status");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseResponseCompression();

app.UseRouting();
app.MapControllers();

//app.MapRazorPages();
app.MapFallbackToFile("index.html");

app.Run();
