node[:deploy].each do |application, deploy|
  bash "deploy" do
    deploy_script = "#{deploy[:deploy_to]}/current/deploy.sh"
    code "sh #{deploy_script}"
    cwd "#{deploy[:deploy_to]}/current"
  end
end
