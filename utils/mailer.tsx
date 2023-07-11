
export default async function sendmail(to: string, text: string): Promise<boolean> {
    const form = new FormData();
    form.append('from', 'Twitter Clone <mailgun@mail.arnel.ninja>');
    form.append('to', to);
    form.append('subject', "Email verification");
    form.append('text', text);

    const response = await fetch("https://api.mailgun.net/v3/mail.arnel.ninja/messages", {
        method: "POST",
        headers: {
            'authorization': 'Basic ' + btoa('api:' + process.env.MAILGUN_API_KEY),
          },
        body: form
    })
    console.log(form)
    if(response.status !== 200){
        return false;
    }
    return true;
}